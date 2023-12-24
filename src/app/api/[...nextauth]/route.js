import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Please enter your credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        if (!credentials) return null;
        //       /* AUTH LOGIC
        //        * logic that takes the credentials
        //        * submitted and returns either a object representing a user or value
        //        * that is false/null if the credentials are invalid.
        //        * e.g. return { id: 1, name: 'Defi Motors', email: 'contact@defioffroads.com' }
        //        * You can also use the `req` object to obtain additional parameters
        //        * (i.e., the request IP address)
        //        * check if user exists in db
        //        */

        const client = await clientPromise;
        const collection = client.db(process.env.ATLAS_DB).collection("users");

        // const collection = db().collection("users"); //reference to collection
        // user variable
        let user = null;
        //run query on db
        user = await collection.findOne({
          email: credentials.email,
          password: credentials.password,
        });
        if (!user) {
          return null;
        } else {
          console.log(`Found user:\n${JSON.stringify(user)}\n`);
          return user;
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
