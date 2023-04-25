import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import DeleteIcon from '@mui/icons-material/Delete';

const AlertOverlay = ({props , handleDelete}) => {
    const {id, name, qualification, subject, image, role } = props;
 
    return (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button className="text-gray-500 outline-1 outline-[#ccc] hover:outline hover:outline-[#ccc] transition-outline duration-[200ms] ease-in bg-transparent flex items-center justify-center  hover:bg-mauve3 h-12 w-12  rounded-full font-normal leading-none ">
       <DeleteIcon />
      </button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
      <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          Sure?
        </AlertDialog.Title>
        <AlertDialog.Description className="text-mauve11 mt-4 text-[15px] leading-normal">
          Do you want to delete the Data of Teacher named {name} from List. This can't be undone.
        </AlertDialog.Description>
        <div className="flex justify-end mt-12 gap-[25px]">
          <AlertDialog.Cancel asChild>
            <button className="text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Cancel
            </button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button onClick={()=> handleDelete(id)}
             className="text-red-800 bg-red-100 bg-opacity-50 hover:bg-opacity-100 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Delete
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
    )
}

export default AlertOverlay;