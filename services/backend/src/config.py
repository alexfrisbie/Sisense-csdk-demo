import os
import json

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY')
    POSTGRES_CONTAINER_NAME = os.getenv('POSTGRES_CONTAINER_NAME')
    POSTGRES_USER = os.getenv('POSTGRES_USER')
    POSTGRES_PASSWORD = os.getenv('POSTGRES_PASSWORD')
    POSTGRES_DB = os.getenv('POSTGRES_DB')
    POSTGRES_PORT = os.getenv('POSTGRES_PORT')
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = os.getenv('EMAIL_USER')
    MAIL_PASSWORD = os.getenv('EMAIL_PASS')

    SQLALCHEMY_DATABASE_URI = "postgresql://" + POSTGRES_USER + ":"\
        + POSTGRES_PASSWORD + "@" + POSTGRES_CONTAINER_NAME + "/" + POSTGRES_DB
