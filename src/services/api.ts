/* eslint-disable @typescript-eslint/no-explicit-any */
// Types based on your Python backend models
export interface PromptRequest {
  prompt: string;
  decision?: string;
  timestamp?: string;
}

export interface PromptResponse {
  type: string;
  message: string;
  timestamp: string;
  requires_decision: boolean;
  data?: Record<string, any>;
  error?: string;
  details?: string;
  available_decisions?: string[];
  additional_info?: string;
  isDataAvailable: boolean;
}

export interface ErrorResponse {
  error: string;
  requires_decision: boolean;
  details?: string;
}

const API_BASE_URL = "http://20.235.33.235:8080"; // Adjust this to match your Python backend URL

class ApiService {
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData: ErrorResponse = await response.json();
      throw new Error(errorData.error || "An error occurred");
    }
    return response.json();
  }

  async processPrompt(request: PromptRequest): Promise<PromptResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/interactive-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...request, employee_id: 2299 }),
      });
      return this.handleResponse<PromptResponse>(response);
    } catch (error) {
      console.error("Error processing prompt:", error);
      throw error;
    }
  }
}

// Create a singleton instance
export const apiService = new ApiService();
