import glob
import os

for file_name in glob.glob("*.html"):
    with open(file_name,encoding="UTF-8") as f:
         data_lines=f.read()

    data_lines=data_lines.replace('会社名','がばい✕ACADEMY')
    data_lines=data_lines.replace('社名','がばい✕ACADEMY')


    with open(file_name, mode="w", encoding="UTF-8") as f:
        f.write(data_lines)

#文字置換君は通常は1つのファイルを指定して、そのファイル内の指定した文字を置換します。
#置換君ネオは全ファイル内の指定された文字を置換します。