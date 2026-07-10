import { Home, Eye, Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import type { TourRoom } from "./maravilla-virtual-tours-v2-data";

interface MaravillaTourRoomCardProps {
  room: TourRoom;
  onSelect: (room: TourRoom) => void;
}

export function MaravillaTourRoomCard({ room, onSelect }: MaravillaTourRoomCardProps) {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg" onClick={() => onSelect(room)}>
      <CardHeader className="p-0">
        <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="text-center text-gray-500">
            <Home className="mx-auto mb-2 h-12 w-12 opacity-50" />
            <p className="text-sm">{room.name}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h4 className="mb-2 font-semibold text-gray-900">{room.name}</h4>
        <p className="mb-3 text-sm text-gray-600">{room.description}</p>
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            <Eye className="mr-1 h-3 w-3" />
            {room.hotspots} hotspots
          </Badge>
          <Button size="sm" variant="outline">
            <Play className="mr-1 h-3 w-3" />
            Explore
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
