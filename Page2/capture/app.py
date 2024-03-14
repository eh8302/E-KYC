from flask import Flask, request, render_template
import base64

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    image_data = request.form['image']
    # Extract base64 encoded image data
    image_data = image_data.split(",")[1]
    # Convert base64 encoded image data to binary
    image_binary = base64.b64decode(image_data)
    # Save the image
    with open('captured_image.jpg', 'wb') as f:
        f.write(image_binary)
    return 'Image uploaded successfully.'

if __name__ == '__main__':
    app.run(debug=True)
