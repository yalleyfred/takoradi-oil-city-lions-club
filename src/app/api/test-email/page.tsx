'use client';

import { useState } from 'react';
import { sendTestEmail, verifyEmailConnection } from '@/utils/test-email';

export default function EmailTestPage() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    to: '',
    subject: 'Test Email',
    html: '<h1>Hello</h1><p>This is a test email</p>',
  });

  const handleVerifyConnection = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await verifyEmailConnection();
      setResponse(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Connection failed');
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    if (!formData.to) {
      setError('Please enter a recipient email');
      setLoading(false);
      return;
    }

    try {
      const result = await sendTestEmail(formData);
      setResponse(result);
      setFormData({ ...formData, to: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send email');
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">Email Transporter Test</h1>

          {/* Connection Check */}
          <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Step 1: Verify Connection</h2>
            <button
              onClick={handleVerifyConnection}
              disabled={loading}
              className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 disabled:opacity-50">
              {loading ? 'Checking...' : 'Check Connection'}
            </button>
          </div>

          {/* Send Email Form */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Step 2: Send Test Email</h2>
            <form onSubmit={handleSendEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Recipient Email
                </label>
                <input
                  type="email"
                  value={formData.to}
                  onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                  placeholder="test@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  HTML Content
                </label>
                <textarea
                  value={formData.html}
                  onChange={(e) => setFormData({ ...formData, html: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 font-mono text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 font-semibold">
                {loading ? 'Sending...' : 'Send Test Email'}
              </button>
            </form>
          </div>

          {/* Response */}
          {response && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">✓ Success</h3>
              <pre className="text-sm text-green-800 overflow-auto">
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2">✗ Error</h3>
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-semibold text-yellow-900 mb-2">Setup Instructions</h3>
            <ul className="text-sm text-yellow-800 space-y-2 list-disc list-inside">
              <li>Make sure you've followed OAUTH2_SETUP.md</li>
              <li>Verify all environment variables are set in .env.local</li>
              <li>Click "Check Connection" first to verify OAuth2 is working</li>
              <li>Then test sending an email to your address</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
