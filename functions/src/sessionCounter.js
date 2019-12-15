const functions = require('firebase-functions');

module.exports = functions.database
  .ref('/users/{userid}/sessions/{sessionid}')
  .onWrite(async (change) => {

    const collectionRef = change.after.ref.parent;
    const countRef = collectionRef.parent.child('session_count');

    // in this case it is better to recount on every write rather than
    // keeping an incremental counter because we will be limiting the
    // number of sessions user may have anyway. so this approach will
    // make the value of session_count more robust.
    const sessionsData = await collectionRef.once('value');
    return await counterRef.set(sessionsData.numChildren());
  });
