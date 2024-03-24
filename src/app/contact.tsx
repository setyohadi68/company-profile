const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>You can reach us via email at example@example.com or by phone at +123456789.</p>
            {/* Form untuk kontak atau informasi lebih lanjut */}
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
