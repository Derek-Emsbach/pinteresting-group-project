# import sqlite3

# def get_all_pins():
#     with sqlite3.connect("dev.db") as conn:
#         curs = conn.cursor()
#         curs.execute('SELECT * FROM pins;')
#         pins = curs.fetchall()
#         return pins

# def get_all_boards():
#     with sqlite3.connect("dev.db") as conn:
#         curs = conn.cursor()
#         curs.execute('SELECT * FROM boards;')
#         pins = curs.fetchall()
#         return pins
