import { Data } from "@/domain/shared/data/data";
import { Store } from "@/domain/core/store/store";
import { ApiRepository } from "../generic/apiRepository";

export class StoreRepository extends ApiRepository<Store, string> {}
