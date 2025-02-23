import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUsers = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    pictureURL: v.string(),
  },
  handler: async (ctx, args) => {
    // check if user is already registered
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq("email", args.email))
      .collect();

      const userData = {
        name: args.name,
        email: args.email,
        pictureURL: args.pictureURL,
        credits: 1000,
      }
    // create a new account if it doesn't exist
    if (!user[0]?.email) {
      const result = await ctx.db.insert("users", userData);
      return userData;
    }
    return user[0];
  },
});
