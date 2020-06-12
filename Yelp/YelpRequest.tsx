export class YelpRequest {
    public constructor(business: any) {
        this.Term = "Restaurant"
        this.Location = business['location'];
        this.Radius = business['radius'];
        this.Latitude = business['latitude']
        this.Longitude = business['longitude']
        this.Categories = business['categories']
        this.Locale = business['locale']
        //this.Limit = business['limit']
        this.Offset = business['offset']
        this.SortBy = business['sort_by']
        this.Price = business['price']
        this.OpenNow = business['open_now']
        this.OpenAt = business['open_at']
        this.Attributes = business['attributes']
    }

    private Term: string;
    private Location: string;
    private Latitude?: number;
    private Longitude: number;
    private Radius?: number;
    private Categories: string;
    private Locale: string;
    //private Limit: number;
    private Offset: number;
    private SortBy: string;
    private Price: string;
    private OpenNow: boolean;
    private OpenAt: number;
    private Attributes: string;

    public getTerm() {
        return (this.Term) ? "&term=" + this.Term : "";
    }
    public getLocation() {
        return (this.Location) ? "&location=" + this.Location : "";
    }
    public getLatitude() {
        return (this.Latitude) ? "&latitude=" + this.Latitude : "";
    }
    public getLongitude() {
        return (this.Longitude) ? "&longitude=" + this.Longitude : "";
    }
    public getRadius() {
        return (this.Radius) ? "&radius=" + this.Radius : "";
    }
    public getCategories() {
        return (this.Categories) ? "&categories=" + this.Categories : "";
    }
    public getLocale() {
        return (this.Locale) ? "&locale=" + this.Locale : "";
    }
    //    public getLimit(){
    //     return (this.Limit) ? "&limit=" + this.Limit : "";
    //    }
    public getOffset() {
        return (this.Offset) ? "&offset=" + this.Offset : "";
    }
    public getSortBy() {
        return (this.SortBy) ? "&sort_by=" + this.SortBy : "";
    }
    public getPrice() {
        return (this.Price) ? "&price=" + this.Price : "";
    }
    public getOpenNow() {
        return (this.OpenNow) ? "&open_now=" + this.OpenNow : "";
    }
    public getOpenAt() {
        return (this.OpenAt) ? "&open_at=" + this.OpenAt : "";
    }
    public getAttributes() {
        return (this.Attributes) ? "&attributes=" + this.Attributes : "";
    }

    public setOffset(value: number | undefined) {
        if (!value) {
            return;
        }
        this.Offset = value;
    }
}