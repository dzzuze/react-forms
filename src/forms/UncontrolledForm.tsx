import { useRef } from "react";
import { useFormStore } from "../store/useFormStore";

export const UncontrolledForm = ({ onClose }: { onClose: () => void }) => {
    const formRef = useRef<HTMLFormElement>(null);

    const addSubmission = useFormStore((state) => state.addSubmission);

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(formRef.current!);

        const name = formData.get('name') as string;
        const age = parseInt(formData.get('age') as string);
        const email = formData.get('email') as string;
        const gender = formData.get('gender') as 'male' | 'female';
        const termsAccepted = formData.get('termsAccepted') === 'on';

        const data = { name, age, email, gender, termsAccepted };

        addSubmission(data);

        formRef.current?.reset()

        onClose();
    }

    return(
        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        >
            <h2 className="text-xl font-semibold text-gray-800">Add Submission</h2>

            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
                <span>Name</span>
                <input name='name' type='text' className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </label>
            
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
                <span>Age</span>
                <input name='age' type='number' className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </label>
            
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
                <span>Email</span>
                <input name='email' type='email' className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </label>
            
            <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
                <span>Gender</span>
                <select name='gender' className="border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </label>
            
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <span>I accept terms and conditions</span>
                <input name='termsAccepted' type='checkbox' className="rounded"/>
            </label>

            <button type='submit' className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition">Submit</button>
        </form>
    )
}