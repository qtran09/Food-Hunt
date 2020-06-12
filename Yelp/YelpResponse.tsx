export class YelpResponse {
    public constructor(business: any) {
        if (business) {
            this.Rating = business['rating'];
            this.Price = business['price'];
            this.Phone = business['phone'];
            this.Alias = business['alias']
            this.IsClosed = business['is_closed']
            this.Categories = business['categories']
            this.ReviewCount = business['review_count']
            this.Name = business['name']
            this.URL = business['url']
            this.Coordinates = business['coordinates']
            this.Image = business['image_url']
            this.Location = business['location']
            this.Distance = business['distance']
            this.Transactions = business['transactions']
        }
    }

    private Rating: number = 0;
    private Price: string = "";
    private Phone?: string = "";
    private Alias: string = "";
    private IsClosed?: boolean = false;
    private Categories: object[] = [];
    private ReviewCount: number = 0;
    private Name: string = "";
    private URL: string = "";
    private Coordinates: object[] = [];
    private Image: string = "";
    private Location: object[] = [];
    private Distance: number = 0;
    private Transactions: object[] = [];

    public getRating() {
        return this.Rating;
    }
    public getPrice() {
        return (this.Price !== "") ? this.Price : "Unknown";
    }
    public getPhone() {
        return this.Phone;
    }
    public getAlias() {
        return this.Alias;
    }
    public isClosed() {
        return this.IsClosed;
    }
    public getCategories() {
        return this.Categories;
    }
    public getReviewCount() {
        return this.ReviewCount;
    }

    public getName() {
        return this.Name;
    }
    public getURL() {
        return (this.URL !== "") ? this.URL : "./Assets/noimage.jpg";
    }
    public getCoordinates() {
        return this.Coordinates;
    }
    public getImage() {
        return this.Image;
    }
    public getLocation() {
        return this.Location;
    }
    public getDistance() {
        return this.Distance;
    }
    public getTransactions() {
        return this.Transactions;
    }
}