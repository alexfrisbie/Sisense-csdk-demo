FROM python:3.10-bullseye

# Make directories
RUN mkdir -p /home/ubuntu/webapp/ && \
    mkdir -p /home/ubuntu/webapp/instance/ && \
    mkdir -p /home/ubuntu/frontend/

# # Node - Needed to create data model typescript files
WORKDIR /home/ubuntu/frontend/
SHELL ["/bin/bash", "--login", "-c"]
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
RUN nvm install 18

# Python
WORKDIR /home/ubuntu/webapp/
COPY requirements.txt /home/ubuntu/webapp/
COPY run.py /home/ubuntu/webapp/
RUN pip install --upgrade pip && \
    pip install -r /home/ubuntu/webapp/requirements.txt

CMD ["python3", "run.py"]
