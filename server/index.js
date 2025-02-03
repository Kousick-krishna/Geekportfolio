import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Contact from './models/contactModel.js';

dotenv.config({ path: './.env' });

const app = express();

// Middleware
app.use(express.json());

// CORS Configuration
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

  app.use((req, res, next) => {
    console.log(`📡 Received ${req.method} request for ${req.url}`);
    next();
  });
  

// Contact Form Route
app.post('/contact', async (req, res) => {
  try {
    console.log("📩 Received Contact Form Submission:", req.body);

    const { name, email, subject, message } = req.body;

    // Input Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "⚠️ All fields are required" });
    }

    // Save to Database
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    console.log("✅ Contact Form Saved to Database");

    res.status(201).json({ success: true, message: '✅ Message sent successfully' });
  } catch (error) {
    console.error("❌ Error Saving Contact Form:", error);
    res.status(500).json({ success: false, message: '❌ Internal Server Error' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});