// Violates: MAX_FUNCTION_COMPLEXITY (cyclomatic > 10)
export function processUserData(user, options) {
  if (!user) return null;

  if (user.type === 'admin') {
    if (user.status === 'active') {
      if (options.includePermissions) {
        if (user.permissions.length > 0) {
          if (options.filterExpired) {
            const now = Date.now();
            return user.permissions.filter(p => {
              if (p.expiresAt) {
                if (p.expiresAt > now) {
                  if (p.scope === 'global') {
                    return true;
                  } else if (p.scope === 'team') {
                    return options.teamId === p.teamId;
                  } else {
                    return false;
                  }
                }
              }
              return false;
            });
          }
        }
      }
    }
  } else if (user.type === 'user') {
    if (options.basicOnly) {
      return { id: user.id, name: user.name };
    }
  }

  return user;
}
