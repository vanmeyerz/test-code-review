// Test file untuk AI Code Review
// File ini sengaja dibuat dengan beberapa issue untuk ditest

export class UserService {
  // Fungsi terlalu panjang (> 50 lines)
  async processUser(userId: string) {
    const user = await this.getUser(userId);

    if (!user) {
      console.log('User not found');
      return null;
    }

    // Nested if yang dalam
    if (user.active) {
      if (user.verified) {
        if (user.subscription) {
          if (user.subscription.isPaid) {
            console.log('Processing paid user');
            return {
              status: 'success',
              user: user
            };
          }
        }
      }
    }

    return null;
  }

  // Function dengan banyak parameters
  createUser(
    name: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    country: string,
    zipCode: string,
    age: number
  ) {
    console.log('Creating user with many params');
    return { name, email, phone, address, city, country, zipCode, age };
  }

  // Nama variable tidak jelas
  async doStuff(x: any, y: any) {
    const a = x + y;
    const b = a * 2;
    const c = b / 3;

    if (a > 10) {
      for (let i = 0; i < 100; i++) {
        console.log(i);
      }
    }

    return c;
  }

  // Async function tanpa error handling
  async getData(id: string) {
    const response = await fetch(`https://api.example.com/users/${id}`);
    const data = await response.json();
    return data;
  }

  // Hardcoded values
  getApiUrl() {
    return 'https://api.example.com';
  }

  // Duplicate code
  validateEmail(email: string) {
    if (!email) return false;
    if (email.length < 5) return false;
    if (!email.includes('@')) return false;
    return true;
  }

  validatePhone(phone: string) {
    if (!phone) return false;
    if (phone.length < 5) return false;
    if (!phone.includes('+')) return false;
    return true;
  }

  private async getUser(userId: string) {
    return {
      id: userId,
      active: true,
      verified: true,
      subscription: { isPaid: true }
    };
  }
}
