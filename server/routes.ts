import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for resume data
  app.get("/api/resume", (req, res) => {
    try {
      // In a real application, this might fetch from a database
      // For now, we'll send a success response
      res.json({
        status: "success",
        message: "Resume data retrieved successfully"
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve resume data"
      });
    }
  });

  // Route to serve resume.pdf if it exists
  app.get("/resume.pdf", (req, res) => {
    const resumePath = path.resolve(__dirname, "../public/resume.pdf");
    
    // Check if the file exists
    if (fs.existsSync(resumePath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=Atharva_Vichare_Resume.pdf');
      res.sendFile(resumePath);
    } else {
      res.status(404).json({
        status: "error",
        message: "Resume PDF not found"
      });
    }
  });
  
  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
