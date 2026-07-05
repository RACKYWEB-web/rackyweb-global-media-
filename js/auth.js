/* ─── GOOGLE SIGN IN ───────────────────────────── */

async function signInWithGoogle() {
  try {
    const { error } = await window.supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin + window.location.pathname
      }
    });

    if (error) {
      console.error(error);
      toast("Google sign in failed.");
    }

  } catch (err) {
    console.error(err);
    toast("Something went wrong.");
  }
}

/* ─── SIGN OUT ─────────────────────────────────── */

async function signOut() {
  await window.supabase.auth.signOut();

  toast("Signed out successfully.");

  location.reload();
}

/* ─── CHECK USER SESSION ───────────────────────── */

window.addEventListener("load", async () => {

  const {
    data: { session },
    error
  } = await window.supabase.auth.getSession();

  if (error) {
    console.error(error);
    return;
  }

  if (!session) {
    console.log("No active session");
    return;
  }

  console.log("Logged in:", session.user.email);

  console.log("go function =", typeof go);

  alert("LOGIN SUCCESS");

  if (typeof go === "function") {
    go("dashboard");
  }

  toast(`Welcome back, ${session.user.user_metadata.full_name || session.user.email}!`);

});