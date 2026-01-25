FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Step into the folder where manage.py is
WORKDIR /app/littlelemon

# Copy the requirements from this folder and install
COPY littlelemon/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy all the server files into the container
COPY . /app

# Run the server using the manage.py that is right there
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]