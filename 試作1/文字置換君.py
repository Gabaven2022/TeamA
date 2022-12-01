file_name="service3.html"
#上に置換したいファイル名を記入してね

with open(file_name,encoding="UTF-8") as f:
    data_lines=f.read()

data_lines=data_lines.replace("company","guideline")#("置換対象の文字","置換後の文字")
data_lines=data_lines.replace("COMPANY","GUIDELINE")

with open(file_name, mode="w", encoding="UTF-8") as f:
    f.write(data_lines)