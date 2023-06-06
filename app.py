# gunicorn -b 0.0.0.0:8000 app:app --> Command to run the server
# use host = "0.0.0.0/0"

# adding this comment to force push on github.



from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("home.html")


@app.route('/resume')
def resume():
    return render_template("resume.html")

@app.route('/projects')
def projects():
    return render_template("projects.html")




if __name__ == '__main__':
    app.run(host="0.0.0.0:8000", debug=False)

# http://44.235.104.249: this is the public ip address
