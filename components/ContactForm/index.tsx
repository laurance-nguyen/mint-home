"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const formSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string().regex(phoneRegex, "Số điện thoại không hợp lệ"),
  email: z.string().email(),
  company: z.string().min(2).max(50),
  message: z.string().min(2).max(500),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col px-6">
      <h1 className="py-14 text-center text-2xl">
        <span className="text-primary">LIÊN HỆ</span> VỚI CHÚNG TÔI
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Tên" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="tel" placeholder="Điện thoại" {...field} />
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
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Công ty" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormControl>
                  <textarea
                    className="w-full resize-none rounded-md border border-input bg-gray-100 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tin nhắn"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="float-right">
            Gửi&nbsp;
            <ArrowRightIcon />
          </Button>
        </form>
      </Form>

      <div className="mt-10">
        <div className="mb-5 flex w-full flex-col gap-1">
          <Image width={164} height={35} src="/logo.svg" alt="logo" />
          <p className="text-2xs tracking-widest text-primary">
            PASSION IN HOME DECOR
          </p>
        </div>

        <div className="mb-10 flex w-full flex-col gap-4 text-sm text-muted-foreground">
          <div>
            <p>0906326466</p>
          </div>
          <p>info@minthome.vn</p>
          <p>
            Nguyễn Hữu Cảnh, Quận Bình Thạnh
            <br /> Thành phố Hồ Chí Minh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
