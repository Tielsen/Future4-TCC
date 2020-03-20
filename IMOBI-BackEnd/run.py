from flask_migrate import Migrate

from app import app, db
from app.models.users import User


Migrate(app, db)

@app.shell_context_processor
def make_shell_context():
    return dict(
        app=app,
        db=db,
        User=User
    )

if __name__ == '__main__':
    app.run()