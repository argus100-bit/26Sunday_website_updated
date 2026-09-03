/**
 * Book a Demo API route handler (Node.js runtime)
 * Validates required fields server-side and returns a structured "received" status.
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, supportReason, referralSource, notes } = body;

    // Server-side validation
    if (!firstName || typeof firstName !== 'string' || firstName.trim().length < 1) {
      return Response.json({ error: 'First name is required.' }, { status: 400 });
    }

    if (!lastName || typeof lastName !== 'string' || lastName.trim().length < 1) {
      return Response.json({ error: 'Last name is required.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return Response.json({ error: 'A valid work email address is required.' }, { status: 400 });
    }

    if (!company || typeof company !== 'string' || company.trim().length < 1) {
      return Response.json({ error: 'Company name is required.' }, { status: 400 });
    }

    if (!supportReason || typeof supportReason !== 'string' || supportReason.trim().length < 1) {
      return Response.json({ error: 'Please select how 26Sunday can support your business.' }, { status: 400 });
    }

    if (!referralSource || typeof referralSource !== 'string' || referralSource.trim().length < 1) {
      return Response.json({ error: 'Please let us know how you heard about us.' }, { status: 400 });
    }

    // Log submission details
    console.log('[Demo booking request received]:', {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      company: company.trim(),
      supportReason: supportReason.trim(),
      referralSource: referralSource.trim(),
      notes: notes ? notes.trim() : '',
      timestamp: new Date().toISOString(),
    });

    return Response.json({ 
      status: 'received',
      message: 'Demo request successfully recorded.' 
    }, { status: 200 });

  } catch (err) {
    console.error('[Demo API error]:', err);
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }
}
