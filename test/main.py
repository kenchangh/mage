from base_handler import BaseHandler
import webapp2


class HomePage(BaseHandler):
    def get(self):
        self.render('index.html')


app = webapp2.WSGIApplication(
      [('/', HomePage)],
      debug = True)

if __name__ == '__main__':
    app.run()

