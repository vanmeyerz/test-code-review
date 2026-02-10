// Test file with intentional code violations
// This will trigger the AI Code Review Bot with mock mode

// Violation 1: no-console-log
export function processUserData(data) {  // Violation 2: avoid-any-type (missing return type)
  console.log('Processing user data:', data);  // Violation: console.log in production code

  // Violation 3: max-function-complexity (nested ifs)
  if (data.type === 'admin') {
    if (data.active) {
      if (data.verified) {
        if (data.premium) {
          if (data.subscribed) {
            console.log('Premium admin user');  // Another console.log
            return handlePremiumAdmin(data);
          }
        }
      }
    }
  }

  return null;
}

// Violation 4: consistent-naming-convention (snake_case instead of camelCase)
class user_manager {  // Should be UserManager
  private user_data;  // Should be userData

  // Violation 5: avoid-any-type (no return type)
  GetUserById(id) {  // Should be getUserById (camelCase)
    console.log('Fetching user:', id);
    return this.user_data.find(u => u.id === id);
  }

  // Violation 6: max-function-length (too many lines)
  ProcessAllUsers() {  // Should be processAllUsers
    let result = [];
    for (let i = 0; i < 100; i++) {
      if (i % 2 === 0) {
        result.push(i);
      }
      if (i % 3 === 0) {
        result.push(i * 2);
      }
      if (i % 5 === 0) {
        result.push(i * 3);
      }
      if (i % 7 === 0) {
        result.push(i * 4);
      }
      console.log('Processing:', i);
    }
    // More unnecessary lines to exceed length limit
    let x = 1;
    let y = 2;
    let z = 3;
    console.log(x, y, z);
    console.log('Done processing');
    console.log('Result:', result);
    return result;
  }
}

// Violation 7: no-try-catch-only (async without proper error handling)
async function fetchUserData(userId: string) {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  console.log('Fetched data:', data);
  return data;
}

function handlePremiumAdmin(data: any) {
  console.log('Handling premium admin');
  return { success: true };
}

// Test webhook trigger - $(date)
export function testWebhookTrigger() {
  console.log('Testing webhook integration');
  return true;
}
// Trigger webhook dengan Installation ID benar - 1770683836
