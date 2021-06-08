from app import APP, render_template, request

@APP.route("/")
def index():
    return render_template("index.html")

