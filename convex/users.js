import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUsers = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    pictureURL: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first()

    if (existingUser) {
      return existingUser;
    }

    // Create a new user if it doesn't exist
    const userData = {
      name: args.name,
      email: args.email,
      pictureURL: args.pictureURL,
      credits: 1000,
    };

    const userId = await ctx.db.insert("users", userData);
    return { ...userData, _id: userId };
  },
});