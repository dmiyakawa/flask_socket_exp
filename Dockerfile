#
# ref. https://qiita.com/nanakenashi/items/6497caf1c56c36f47be9
#
FROM python:3.6-alpine

# For debugging
RUN apk update
RUN apk add bash

WORKDIR /srv
COPY . .
RUN pip install -r requirements.txt

CMD ["python", "app.py", "--host", "0.0.0.0"]
