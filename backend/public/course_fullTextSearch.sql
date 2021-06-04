
USE online_academy;
ALTER TABLE course ADD FULLTEXT (title, short_description, full_description);