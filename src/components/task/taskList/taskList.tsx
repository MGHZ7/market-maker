import { Card } from "@/components/ui/card/card";
import { TaskListItem } from "./taskListItem/taskListItem"
import { List } from "@/components/ui/list/list";
import { ListItem } from "@/components/ui/list/listItem/listItem";
import { TaskListItemProps } from "./taskListItem/taskListItemType";
import { MouseEvent, useContext, useEffect, useState } from "react";
import { ComponentBasicState } from "@/components/generic/componentBasicState";
import { ListSkeleton } from "@/components/ui/list";
import { TaskAppService, TaskAppServiceContext } from "@/app/interface/store/store";
import { CardActionsLayoutProps, CrudCard } from "@/components/ui/card/crudCard/crudCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Task } from "@/app/core/store/store";

export interface TaskListProps {
    tasks?: TaskListItemProps[];
};

interface TaskListState extends ComponentBasicState {
    tasks?: TaskListItemProps[];
};

export const TaskList = (props: TaskListProps) => {

    const queryClient = useQueryClient();

    const taskAppService = useContext(TaskAppServiceContext);
    const tasksListQuery = taskAppService.useGetAllQuery();
    const addTaskQuery = taskAppService.useAddQuery(queryClient);

    const addElementAction: CardActionsLayoutProps[] = [
        {
            position: "topEndCorner",
            button: {
                icon: <FontAwesomeIcon icon={faPlus} />,
                onClick: (event: MouseEvent) => {
                    addTaskQuery.mutate(Task.createTask(`Motasem`))
                }
            }
        }
    ]

    return (
        <>
            <CrudCard title={`Tasks list`} actions={addElementAction}>
                {tasksListQuery.isLoading
                    ? <ListSkeleton count={5} />
                    : (tasksListQuery.isFetched ?
                        <>
                            <List>
                                {tasksListQuery.data?.data?.map((task, index) =>
                                    <TaskListItem key={index} task={task} />)}
                            </List>
                        </>
                        : null)}
            </CrudCard>
        </>
    )
};
