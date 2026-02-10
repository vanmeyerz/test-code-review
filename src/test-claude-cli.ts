// Test file to verify Claude CLI integration
export class UserService {
  // TODO: Add error handling
  async getUserById(id: string) {
    const user = await fetch(`https://api.example.com/users/${id}`);
    return user.json();
  }

  // Function with potential issues
  processUserData(data: any) {
    console.log('Processing user:', data);

    // Magic number
    if (data.age > 18) {
      return data;
    }

    return null;
  }

  // Async function without await
  async saveUser(user: any) {
    console.log('Saving user:', user);
    // Missing await and error handling
    fetch('https://api.example.com/users', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  }
}
// Updated to trigger webhook
