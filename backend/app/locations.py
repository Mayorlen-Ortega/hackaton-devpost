LOCATIONS = [
    {"id": "coquimbo-centro", "name": "Coquimbo Centro", "latitude": -29.9533, "longitude": -71.3395},
    {"id": "guanaqueros", "name": "Guanaqueros", "latitude": -30.1846, "longitude": -71.4263},
    {"id": "tongoy", "name": "Tongoy", "latitude": -30.2534, "longitude": -71.4967},
    {"id": "la-serena-centro", "name": "La Serena Centro", "latitude": -29.9027, "longitude": -71.2519},
    {"id": "las-companias", "name": "Las Companias", "latitude": -29.8704, "longitude": -71.2614},
    {"id": "sindempart", "name": "Sindempart", "latitude": -29.9861, "longitude": -71.3277},
]


def get_location(location_id: str) -> dict | None:
    return next((location for location in LOCATIONS if location["id"] == location_id), None)
