// Violates: CONSISTENT_NAMING_CONVENTION, AVOID_ANY_TYPE
class user_service {  // Should be PascalCase
  async GetUser(user_id) {  // Should be camelCase, missing return type
    return await this.repository.findOne(user_id);
  }

  async Update_User(user_id, data) {  // Bad naming, missing types
    return await this.repository.update(user_id, data);
  }

  calculate_age(birthDate) {  // Should be camelCase, missing return type
    const today = new Date();
    const birth = new Date(birthDate);
    return today.getFullYear() - birth.getFullYear();
  }
}

function Process_Data(input) {  // Should be camelCase, missing return type
  return input;
}
