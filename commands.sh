lsof -i :8080
lsof -i :5173
lsof -i :5174
kill -9 $(lsof -ti :5173)
kill -9 $(lsof -ti :5174)
kill -9 $(lsof -ti :8080)


cd backend
mvn clean package
java -jar target/backend-0.0.1-SNAPSHOT.jar
