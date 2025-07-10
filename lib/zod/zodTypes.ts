import z from "zod";



export const credentialSchema= z.object({
    name:z.string().optional(),
    email: z.string().email(),
    password: z.string().min(6)
});

export type CredentialType= z.infer<typeof credentialSchema>;