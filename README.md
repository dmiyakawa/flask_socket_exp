# これは何

以下を2018-07-12時点の状況で再現、調整したもの

 * https://qiita.com/nanakenashi/items/6497caf1c56c36f47be9

調整した点

 * https://github.com/miguelgrinberg/Flask-SocketIO から example/ 配下を取得
 * オプションを受け取れるようにapp.pyを修正
 * Dockerおよびローカル両方で動作するようにオプション追加
 * その他アプリ微調整
 * requirements.txt を作成時最新の状況に更新
 * templates/index.html 内のjquery, socket.io のバージョンを最新にしてローカルに配置


## Run in Docker

```shell-session
$ docker build -t flask_socket_exp .
$ docker run flask_socket_exp
```

The image is (or may be) available from https://hub.docker.com/r/dmiyakawa/flask_socket_exp/

## Run in native environment

```shell-session
$ python --version
3.6.5
$ python -m venv venv
$ source venv/bin/activate
(venv) $ pip install -U pip
...
(venv) $ pip install -r requirements.txt
(venv) $ ./app.py  # localhost only

(venv) $ ./app.py --host 0.0.0.0  # Exposed to the network (be careful)
```
