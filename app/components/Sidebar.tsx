import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from './Material'
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    CheckIcon
  } from "@heroicons/react/24/solid";


export default function Sidebar() {
    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray">
              Workflow
            </Typography>
          </div>
          <List>
            <ListItem>
              <ListItemPrefix>
                <CheckIcon className="h-5 w-5" />
              </ListItemPrefix>
              Ask Question
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckIcon className="h-5 w-5" />
              </ListItemPrefix>
              Review Summary
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CheckIcon className="h-5 w-5" />
              </ListItemPrefix>
              Trial Objective
            </ListItem>
          </List>
        </Card>
      );
    }