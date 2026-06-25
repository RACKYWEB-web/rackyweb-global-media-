# RACKYWEB Global Media - Project Structure Guide

## Overview

This project has been refactored to separate **HTML, CSS, and JavaScript** into individual files for better maintainability, scalability, and best practices.

## File Structure

```
Global-media/
├── index.html          (HTML markup - cleaned)
├── styles.css          (All CSS styles)
├── script.js           (All JavaScript - with Supabase integration)
├── README.md           (This file)
└── .env.example        (Environment variables template)
```

## Key Improvements Made

### 1. **Separation of Concerns**
- ✅ HTML file contains only markup (no embedded CSS or JS)
- ✅ CSS file contains all styling
- ✅ JavaScript file contains all functionality

### 2. **Bug Fixes Applied**
- ✅ Fixed duplicate Supabase initialization code
- ✅ Fixed typo in Google Sign-up button (`onclick="signInWithGoogle()">>`→ `onclick="signInWithGoogle()">`)
- ✅ Fixed duplicate `signInWithGoogle()` function
- ✅ Added proper error handling for Supabase authentication
- ✅ Fixed animation and reveal functions
- ✅ Improved carousel logic and bounds checking

### 3. **Supabase Integration - Corrected**

**Before (Issues):**
- Credentials were hardcoded multiple times
- Google sign-in URL was hardcoded and incorrect
- Function was duplicated
- No error handling

**After (Fixed):**
```javascript
// Proper initialization with error handling
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function signInWithGoogle() {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin }
    });
    
    if (error) {
      console.error("Google sign-in error:", error.message);
      toast("Sign-in failed. Please try again.");
    }
  } catch (err) {
    console.error("Unexpected error during sign-in:", err);
    toast("An unexpected error occurred. Please try again.");
  }
}
```

### 4. **JavaScript Improvements**
- ✅ Better error handling and try-catch blocks
- ✅ Proper DOM initialization timing
- ✅ Separated animation logic for clarity
- ✅ Added event delegation for better performance
- ✅ Fixed animation timing and sequencing
- ✅ Removed redundant code

### 5. **Performance Optimizations**
- ✅ External CSS file loads faster (browser caching)
- ✅ External JS file loads faster (browser caching)
- ✅ Reduced initial HTML file size
- ✅ Better code organization = easier optimization later

## Setup Instructions

### 1. **File Structure**
Ensure all three files are in the same directory:
- `index.html`
- `styles.css`
- `script.js`

### 2. **Update Environment Variables**
Create a `.env` file (or use in your deployment platform):
```env
SUPABASE_URL=https://imcwvzdokiclmcrbtlng.supabase.co
SUPABASE_ANON_KEY=sb_publishable_Hf5tOXZv79vFrcVwlIZ1kQ_HXO-5O_v
REDIRECT_URL=https://yourdomain.com
```

### 3. **Update Supabase Redirect URL**
In `script.js`, update the redirect URL for production:
```javascript
// Development
redirectTo: window.location.origin

// Production (update accordingly)
redirectTo: "https://your-domain.com"
```

### 4. **Include Supabase Library**
The `index.html` includes the CDN link:
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
```

## Usage

### Navigation
```javascript
go('home')        // Navigate to home page
go('blog')        // Navigate to blog page
go('marketplace') // Navigate to marketplace
go('dashboard')   // Navigate to dashboard
// ... and so on
```

### Modals
```javascript
openModal('postModal')   // Open modal
closeModal('postModal')  // Close modal
```

### Notifications
```javascript
toast('Your message here') // Show toast notification
```

### Filters
```javascript
bFilter(buttonElement)   // Blog filter
mpFilter(buttonElement)  // Marketplace filter
```

## Supabase Configuration Checklist

- [ ] Update Supabase URL in `script.js`
- [ ] Update Supabase Anonymous Key in `script.js`
- [ ] Configure Google OAuth provider in Supabase
- [ ] Set authorized redirect URLs in Supabase
- [ ] Set up authentication users table
- [ ] Configure business listings table (optional)
- [ ] Set up storage bucket for images (optional)

## Common Issues & Solutions

### Issue: Supabase Connection Error
**Solution:** Verify credentials in `script.js` and network connectivity

### Issue: Google Sign-In Not Working
**Solution:** 
1. Check Supabase Google OAuth provider is configured
2. Verify redirect URL matches in Supabase settings
3. Check browser console for specific error

### Issue: Styles Not Loading
**Solution:** Ensure `styles.css` is in the same directory as `index.html`

### Issue: JavaScript Not Working
**Solution:** 
1. Verify `script.js` is in the same directory
2. Check browser console for JavaScript errors
3. Ensure Supabase CDN is loaded

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ❌ Not supported

## Future Enhancements

1. **Module System**: Consider converting to ES modules for better organization
2. **Build Tool**: Use webpack/vite for production bundling
3. **Testing**: Add unit tests for JavaScript functions
4. **Database**: Connect dashboard to real Supabase data
5. **Analytics**: Implement page tracking and analytics
6. **Dark Mode**: Add dark mode toggle functionality

## Accessibility Notes

- All buttons have proper ARIA labels
- Navigation is keyboard accessible
- Color contrast meets WCAG AA standards
- Animations respect `prefers-reduced-motion`

## Performance Tips

1. Minify CSS and JS for production
2. Enable gzip compression on server
3. Use CDN for static assets
4. Implement lazy loading for images
5. Consider service worker for offline functionality

## Security Notes

- Supabase keys shown here are public/anon keys (safe to expose)
- Service role key should NEVER be exposed in frontend
- Keep sensitive data on backend only
- Validate all user input on both frontend and backend

## Support & Documentation

- [Supabase Documentation](https://supabase.com/docs)
- [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [ES6 JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

---

**Last Updated:** 2025-06-25
**Version:** 2.0 (Refactored)
