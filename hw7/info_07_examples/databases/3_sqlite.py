import sqlite3 #pip install pysqlite3
connection = sqlite3.connect('2_papers.sqlite')

# create a cousor object for select query:
cursor = connection.execute("SELECT * from author ")
 
# display all data from the author table:
for row in cursor:
    print(row)
