export default function DataDeletionPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-sm leading-6">
      <h1 className="text-2xl font-semibold mb-6">
        Data Deletion Instructions – Price Ping
      </h1>

      <p className="mb-4">
        Price Ping respects user privacy. This page explains how to request
        deletion of data that may be associated with our Facebook application.
      </p>

      <h2 className="text-lg font-semibold mt-8 mb-2">
        What Data May Be Involved
      </h2>
      <p className="mb-4">
        Price Ping is designed to publish content to Facebook Pages authorized
        by the Page owner or administrator. We do not intentionally store
        sensitive personal information. If any identifiers or logs are retained
        for operational purposes, they are limited and used only to operate the
        application.
      </p>

      <h2 className="text-lg font-semibold mt-8 mb-2">
        How to Request Deletion
      </h2>
      <p className="mb-2">
        To request deletion of any data associated with your use of the Price
        Ping Facebook application, email:
      </p>
      <p className="mb-4">
        <strong>privacy@yourdomain.com</strong>
      </p>

      <p className="mb-2">Please include the following:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Your full name</li>
        <li>Your Facebook User ID (or the Page ID if applicable)</li>
        <li>The app name: <strong>Price Ping</strong></li>
        <li>A brief description of the deletion request</li>
      </ul>

      <h2 className="text-lg font-semibold mt-8 mb-2">Processing Timeline</h2>
      <p className="mb-4">
        We will review and process valid requests within <strong>30 days</strong>.
        If we need additional information to verify the request, we will contact
        you at the email address you provide.
      </p>

      <h2 className="text-lg font-semibold mt-8 mb-2">Confirmation</h2>
      <p className="mb-4">
        After completion, we will confirm that deletion has been processed. Some
        minimal records may be retained if required for legal, security, or fraud
        prevention purposes, consistent with applicable law.
      </p>

      <h2 className="text-lg font-semibold mt-8 mb-2">Contact</h2>
      <p className="mb-4">
        If you have questions, contact:
        <br />
        <strong>pricepings.com</strong>
      </p>

      <p className="text-xs text-gray-500 mt-10">
        Last updated: January 2026
      </p>
    </main>
  );
}
