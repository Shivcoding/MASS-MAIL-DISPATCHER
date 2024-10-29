import streamlit as st
import pandas as pd
import re
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import csv
from io import StringIO

def is_valid_email(email):
    """Validate email using regex pattern"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email.strip()))

def get_smtp_settings(email):
    """Determine SMTP server settings based on email provider"""
    providers = {
        "gmail.com": ("smtp.gmail.com", 587, "Gmail"),
        "yahoo.com": ("smtp.mail.yahoo.com", 587, "Yahoo"),
        "outlook.com": ("smtp-mail.outlook.com", 587, "Outlook"),
        "hotmail.com": ("smtp.live.com", 587, "Hotmail"),
        "aol.com": ("smtp.aol.com", 587, "AOL")
    }

    email_parts = email.split("@")
    if len(email_parts) != 2:
        return None, None, None

    domain = email_parts[-1]
    if domain in providers:
        return providers[domain]
    else:
        return None, None, None

def send_email(sender_email, sender_password, recipient, subject, message, smtp_server, smtp_port):
    """Send email using SMTP with improved error handling"""
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = recipient
        msg['Subject'] = subject

        # Add body to email
        msg.attach(MIMEText(message, 'plain'))

        # Create SMTP session with explicit error handling
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        
        try:
            server.login(sender_email, sender_password)
        except smtplib.SMTPAuthenticationError:
            st.error(f"Authentication failed for {recipient}. Please check your credentials.")
            return False
        
        server.send_message(msg)
        server.quit()
        return True
        
    except Exception as e:
        st.error(f"Error sending email to {recipient}: {str(e)}")
        return False

def process_csv(csv_contents):
    """Process CSV file and separate valid and invalid emails"""
    valid_emails = []
    invalid_emails = []
    
    try:
        # Read CSV content
        df = pd.read_csv(StringIO(csv_contents))
        
        # Assume the email column is the first column
        email_column = df.columns[0]
        
        for email in df[email_column]:
            if is_valid_email(str(email)):
                valid_emails.append(email)
            else:
                invalid_emails.append(email)
                
    except Exception as e:
        st.error(f"Error processing CSV file: {str(e)}")
        return [], []
            
    return valid_emails, invalid_emails

def main():
    st.title("Multi-Provider Mass Mail Dispatcher")
    
    # Add instructions at the top
    with st.expander("📌 Important Instructions (Click to expand)"):
        st.markdown("""
        ### Before using this application:
        
        1. **Gather Sender Credentials:**
           - You'll need the email address and password for the email account you'll be using to send the emails.
           - Make sure the email account has the necessary permissions to send emails through SMTP.
        
        2. **Prepare the CSV File:**
           - The CSV file should have email addresses in the first column.
           - Ensure the email addresses are valid and formatted correctly.
        
        3. **Using the Application:**
           - Upload the CSV file with email addresses
           - Enter your sender email and password
           - Compose your message and send
        
        ### Common Issues:
        - If you get an authentication error, make sure you're using the correct email credentials.
        - Some email providers may have additional security measures in place, so you may need to enable "Allow less secure apps" or use an app password.
        - Make sure your CSV file has email addresses in the first column.
        """)
    
    # Initialize session state
    if 'valid_emails' not in st.session_state:
        st.session_state.valid_emails = []
    if 'invalid_emails' not in st.session_state:
        st.session_state.invalid_emails = []
    
    # File upload
    st.header("1. Upload CSV File")
    uploaded_file = st.file_uploader("Choose a CSV file", type=['csv'])
    
    if uploaded_file is not None:
        # Read file contents
        csv_contents = uploaded_file.getvalue().decode('utf-8')
        st.session_state.valid_emails, st.session_state.invalid_emails = process_csv(csv_contents)
        
        # Display email statistics
        st.header("2. Email Validation Results")
        col1, col2 = st.columns(2)
        with col1:
            st.metric("Valid Emails", len(st.session_state.valid_emails))
        with col2:
            st.metric("Invalid Emails", len(st.session_state.invalid_emails))
        
        # Display valid emails
        st.subheader("Valid Emails")
        if st.session_state.valid_emails:
            st.write(pd.DataFrame(st.session_state.valid_emails, columns=['Email']))
        
        # Display invalid emails
        st.subheader("Invalid Emails")
        if st.session_state.invalid_emails:
            st.write(pd.DataFrame(st.session_state.invalid_emails, columns=['Email']))
        
        # Email composition section
        st.header("3. Compose Email")
        
        # Email credentials
        with st.expander("Email Credentials"):
            sender_email = st.text_input("Sender Email")
            sender_password = st.text_input("Sender Password", type="password")
        
        # Email content
        subject = st.text_input("Subject")
        message = st.text_area("Message")
        
        # Send email button
        if st.button("Send Mass Email"):
            if not sender_email or not sender_password:
                st.error("Please enter sender email and password")
            elif not subject or not message:
                st.error("Please enter subject and message")
            elif not st.session_state.valid_emails:
                st.error("No valid emails to send to")
            else:
                progress_bar = st.progress(0)
                status_text = st.empty()
                
                successful_sends = 0
                total_emails = len(st.session_state.valid_emails)
                
                for i, email in enumerate(st.session_state.valid_emails):
                    smtp_server, smtp_port, provider_name = get_smtp_settings(email)
                    if smtp_server and smtp_port:
                        if send_email(sender_email, sender_password, email, subject, message, smtp_server, smtp_port):
                            successful_sends += 1
                        else:
                            st.error(f"Failed to send email to {email} (Provider: {provider_name})")
                    else:
                        st.error(f"Unsupported email provider for {email}")
                    
                    # Update progress
                    progress = (i + 1) / total_emails
                    progress_bar.progress(progress)
                    status_text.text(f"Sending emails: {i+1}/{total_emails}")
                
                if successful_sends > 0:
                    st.success(f"Successfully sent {successful_sends} out of {total_emails} emails")
                else:
                    st.error("Failed to send any emails. Please check your credentials and try again.")

if __name__ == "__main__":
    main()