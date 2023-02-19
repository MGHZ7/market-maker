import { IconButton } from "@/components/ui/button/icon/iconButton";
import { TaskListItemProps } from "./taskListItemType";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Task } from "@/domain/core/store/store";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useContext } from "react";
import { TaskAppServiceContext } from "@/domain/application/store/store";

export const TaskListItem = (props: { task: Task }) => {
    const queryClient = useQueryClient();
    const taskAppService = useContext(TaskAppServiceContext);
    const deleteQuery = taskAppService.useDeleteQuery(queryClient);
    const handleOnDelete = () => {
        deleteQuery.mutate(props.task);
    };

    return (
        <div className={`flex justify-between bg-white p-2 rounded-sm`}>
            <h4 className={`text-sm`}>
                {props.task.title}
            </h4>
            <IconButton
                className={`text-red-500`}
                icon={<FontAwesomeIcon icon={faTrash} />}
                onClick={handleOnDelete} />
        </div>
    );
};