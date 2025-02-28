import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUsers = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    pictureURL: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if user is already registered
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq("email", args.email))
      .collect();

    const userData = {
      name: args.name,
      email: args.email,
      pictureURL: args.pictureURL,
      credits: 1000,
    };

    // Create a new account if it doesn't exist
    if (!user[0]?.email) {
      const userId = await ctx.db.insert("users", userData);
      return { ...userData, _id: userId };
    }

    // Return the existing user with _id
    return user[0];
  },
});
