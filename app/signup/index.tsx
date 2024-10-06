"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
   email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  })
});

const SignUpComponents = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
  });

  return (
    <div className=" w-full flex items-center min-h-screen justify-center ">
      <Form {...form}> 
        <form onSubmit={form.handleSubmit(console.log)} className=" space-y-2   w-96 border rounded-xl p-5">
          <h1 className=" text-center text-xl">Sign Up</h1>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username...." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email...." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


         <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password...." type="password"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" w-full">
            <Button className="w-full rounded-xl mt-3" type="submit">Submit</Button>
          </div>
          <div className=" flex items-center justify-center gap-2">
           <FcGoogle className=" text-2xl"/>
           <VscGithub className=" text-2xl" />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUpComponents;
