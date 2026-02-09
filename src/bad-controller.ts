// Violates: NO_BUSINESS_LOGIC_IN_CONTROLLER, MISSING_ERROR_HANDLING, NO_CONSOLE_LOG
export class UserController {
  async createUser(req: any, res: any) {
    const { email, name, password } = req.body;

    // No try-catch (MISSING_ERROR_HANDLING)
    const existingUser = await this.db.findUserByEmail(email);

    if (existingUser) {
      console.log('User already exists:', email); // NO_CONSOLE_LOG
      return res.status(400).json({ error: 'User exists' });
    }

    // Business logic in controller (NO_BUSINESS_LOGIC_IN_CONTROLLER)
    const hashedPassword = await this.hashPassword(password);
    const user = await this.db.createUser({
      email,
      name,
      password: hashedPassword,
    });

    console.log('Created user:', user); // NO_CONSOLE_LOG
    return res.json(user);
  }

  private async hashPassword(password: string) {
    return password;
  }
}
