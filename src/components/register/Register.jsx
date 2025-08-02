import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Checkbox } from "@/components/ui/checkbox";

// Define schema using Zod
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name required" }),
  lastName: z.string().min(1, { message: "Last name required" }),
  phoneNumber: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  neetScore: z.string().min(3, { message: "Neet score required" }),
  hasTakenNeet: z.boolean().default(false),
  planningToTakeNeet: z.boolean().default(false),
}); 

const Register = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      neetScore: "",
      hasTakenNeet: false,
      planningToTakeNeet: false,
    },
  });

  const onSubmit = (values) => {
    console.log("Submitted values:", values);
  };

  return (
    <div
      className="w-full min-h-screen bg-[#3b1040] bg-no-repeat bg-cover bg-bottom flex items-center justify-center"
      style={{ backgroundImage: "url('/images/bg-img.png')" }}
    >
      <div
        className="w-full max-w-[832px] bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden m-4 max-h-screen overflow-y-auto pb-6 pt-4 md:pt-0 md:pb-0"
        style={{
          backgroundImage: "url('/images/form-bg.png')",
          backgroundSize: "100% 250px",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left - Form */}
        <div className="w-full p-3 sm:p-8 md:p-8 bg-transparent ">
      <div className="mb-4 flex justify-center md:justify-start">
  <div className="bg-[#511B4D] w-[166px] rounded-full flex items-center justify-center">
    <img
      src="/images/logo.png"
      alt="Doc2Doc Logo"
      className="h-[47px] w-[138px]"
    />
  </div>
</div>

          <h2 className="mt-8 text-3xl font-semibold text-center bg-gradient-to-r from-[#BA315A] to-[#69378F] bg-clip-text text-transparent mb-6">
            Create Account
          </h2>

          <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="space-y-2">
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs text-[#1E1E1E]">First Name</FormLabel>
            <FormControl>
              <Input placeholder="First Name" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
    </div>
    <div className="space-y-2">
      <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs text-[#1E1E1E]">Last Name</FormLabel>
            <FormControl>
              <Input placeholder="Last Name" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
    </div>
  </div>

  <FormField
    control={form.control}
    name="phoneNumber"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-xs text-[#1E1E1E]">Phone Number</FormLabel>
        <FormControl>
          <Input placeholder="Phone Number" {...field} />
        </FormControl>
        <FormMessage className="text-xs"/>
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-xs text-[#1E1E1E]">Mail ID</FormLabel>
        <FormControl>
          <Input placeholder="Mail ID" {...field} />
        </FormControl>
        <FormMessage className="text-xs"/>
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="neetScore"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-xs text-[#1E1E1E]">NEET Score</FormLabel>
        <FormControl>
          <Input placeholder="NEET Score" {...field} />
        </FormControl>
        <FormMessage className="text-xs"/>
      </FormItem>
    )}
  />

  <div className="space-y-2">
    <FormField
      control={form.control}
      name="hasTakenNeet"
      render={({ field }) => (
        <FormItem className="flex flex-row items-center space-x-1 space-y-0">

          <FormControl>
            <Checkbox className="border-1 border-gray-500"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <FormLabel className="text-xs font-normal">
            Have you already taken the NEET examination?
          </FormLabel>
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="planningToTakeNeet"
      render={({ field }) => (
      <FormItem className="flex flex-row items-center space-x-1 space-y-0">

          <FormControl>
            <Checkbox  className="border-1 border-gray-500"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <FormLabel className="text-xs font-normal">
            Are you planning to take NEET Examination?
          </FormLabel>
        </FormItem>
      )}
    />
  </div>

  <Button
    type="submit"
    className="w-full py-2 bg-[#F2B94A] text-gray-800 font-semibold rounded-sm hover:bg-yellow-500 transition"
  >
    Submit
  </Button>

  <p className="text-sm text-center mt-2 font-semibold">
    Already have an account?{" "}
    <a href="#" className="text-blue-600 hover:underline">
      Sign in
    </a>
  </p>
</form>

          </Form>
        </div>

        {/* Right - Doctor Image */}
        <div
          className="w-full relative flex flex-col justify-center items-center p-0 hidden md:flex"
          style={{
            background:
              "linear-gradient(to bottom, rgba(81, 27, 77, 0) 0%, rgba(81, 27, 77, 0.2) 100%)",
          }}
        >
          <p className="absolute bottom-10 text-xs px-12 text-center z-10">
            No office visits. Our team will assist you in the best manner.
            Personalized one-on-one support, Quick response time, 100% Free
            counseling for Indian students
          </p>

          <img
            src="/images/doctor-img.png"
            alt="Doctor"
            className="max-h-[600px] w-full object-contain block"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
