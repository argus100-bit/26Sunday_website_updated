/**
 * Contact form API route handler (Node.js runtime)
 * Validates required fields server-side and returns a structured "received" response.
 * TODO: wire to real email/CRM (Sales / Support / Security routing per reason field) before launch.
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Server-side validation — never trust client-only validation
    if (!name || typeof name !== 'string' || name.trim().length < 1) {
      return Response.json({ error: 'Name is required.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return Response.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return Response.json({ error: 'Message is required (minimum 5 characters).' }, { status: 400 });
    }

    // Log submission (not yet routed to email/CRM backend)
    console.log('[Contact form submission — not yet routed to backend]:', {
      name: name.trim(),
      email: email.trim(),
      reason: body.reason || 'Not specified',
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    return Response.json({ status: 'received' }, { status: 200 });

  } catch (err) {
    console.error('[Contact API error]:', err);
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }
}
